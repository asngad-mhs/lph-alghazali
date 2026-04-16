import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, handleFirestoreError, OperationType, auth, storage } from '../firebase';
import { LogOut, Trash2, CheckCircle, XCircle, FileText, Users, Plus, Edit2, X } from 'lucide-react';
import { signOut } from 'firebase/auth';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function AdminDashboard({ isAdmin }: { isAdmin: boolean }) {
  const [activeTab, setActiveTab] = useState<'registrations' | 'news'>('registrations');
  const [registrations, setRegistrations] = useState<any[]>([]);
  const [newsList, setNewsList] = useState<any[]>([]);
  
  // News form state
  const [showNewsForm, setShowNewsForm] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [editingNewsId, setEditingNewsId] = useState<string | null>(null);
  const [newsForm, setNewsForm] = useState({
    title: '',
    content: '',
    imageUrl: '',
    published: true
  });

  useEffect(() => {
    if (!isAdmin) return;
    
    // Listen to registrations
    const qReg = query(collection(db, 'registrations'), orderBy('createdAt', 'desc'));
    const unsubReg = onSnapshot(qReg, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRegistrations(data);
    }, (error) => handleFirestoreError(error, OperationType.GET, 'registrations'));

    // Listen to news
    const qNews = query(collection(db, 'news'), orderBy('createdAt', 'desc'));
    const unsubNews = onSnapshot(qNews, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNewsList(data);
    }, (error) => handleFirestoreError(error, OperationType.GET, 'news'));

    return () => {
      unsubReg();
      unsubNews();
    };
  }, [isAdmin]);

  // Registration Actions
  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, 'registrations', id), { status: newStatus });
    } catch(err) {
      handleFirestoreError(err, OperationType.UPDATE, `registrations/${id}`);
    }
  };

  const deleteRegistration = async (id: string) => {
    if(confirm("Hapus data ini?")) {
      try {
        await deleteDoc(doc(db, 'registrations', id));
      } catch(err) {
        handleFirestoreError(err, OperationType.DELETE, `registrations/${id}`);
      }
    }
  };

  // News Actions
  const handleNewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingNewsId) {
        await updateDoc(doc(db, 'news', editingNewsId), {
          ...newsForm
        });
      } else {
        await addDoc(collection(db, 'news'), {
          ...newsForm,
          createdAt: serverTimestamp(),
          authorUid: auth.currentUser?.uid || ''
        });
      }
      setShowNewsForm(false);
      resetNewsForm();
    } catch (err) {
      handleFirestoreError(err, editingNewsId ? OperationType.UPDATE : OperationType.CREATE, 'news');
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const fileExtension = file.name.split('.').pop();
      const fileName = `news_${Date.now()}.${fileExtension}`;
      const storageRef = ref(storage, `news/${fileName}`);
      
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      
      setNewsForm(prev => ({ ...prev, imageUrl: downloadURL }));
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Gagal mengunggah gambar. Pastikan Anda memiliki izin dan file tidak bermasalah.");
    } finally {
      setIsUploading(false);
    }
  };

  const editNews = (news: any) => {
    setNewsForm({
      title: news.title,
      content: news.content,
      imageUrl: news.imageUrl || '',
      published: news.published
    });
    setEditingNewsId(news.id);
    setShowNewsForm(true);
  };

  const deleteNews = async (id: string) => {
    if(confirm("Hapus berita ini?")) {
      try {
        await deleteDoc(doc(db, 'news', id));
      } catch(err) {
        handleFirestoreError(err, OperationType.DELETE, `news/${id}`);
      }
    }
  };

  const resetNewsForm = () => {
    setNewsForm({ title: '', content: '', imageUrl: '', published: true });
    setEditingNewsId(null);
  };

  if (!isAdmin) return null;

  return (
    <div className="fixed inset-0 bg-stone-100 z-[200] overflow-y-auto">
      <div className="bg-primary-900 text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold font-serif">LPH Dashboard Admin</h1>
          <div className="hidden sm:flex border-l border-primary-700 pl-4 space-x-2">
            <button 
              onClick={() => setActiveTab('registrations')}
              className={`px-4 py-2 rounded font-medium flex items-center gap-2 transition-colors ${activeTab === 'registrations' ? 'bg-primary-800' : 'hover:bg-primary-800/50'}`}
            >
              <Users size={18} /> Pendaftar
            </button>
            <button 
              onClick={() => setActiveTab('news')}
              className={`px-4 py-2 rounded font-medium flex items-center gap-2 transition-colors ${activeTab === 'news' ? 'bg-primary-800' : 'hover:bg-primary-800/50'}`}
            >
              <FileText size={18} /> Berita
            </button>
          </div>
        </div>
        <button 
          onClick={() => signOut(auth)}
          className="flex items-center gap-2 bg-primary-800 hover:bg-red-600 px-4 py-2 rounded transition-colors text-sm font-medium"
        >
          <LogOut size={16} /> Keluar
        </button>
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 mb-8">
        {/* Mobile Tabs */}
        <div className="sm:hidden flex space-x-2 mb-6 overflow-x-auto pb-2">
          <button 
            onClick={() => setActiveTab('registrations')}
            className={`px-4 py-2 rounded font-medium flex items-center gap-2 whitespace-nowrap ${activeTab === 'registrations' ? 'bg-primary-900 text-white' : 'bg-white text-stone-600 border border-stone-200'}`}
          >
            <Users size={18} /> Klien / Pendaftar
          </button>
          <button 
            onClick={() => setActiveTab('news')}
            className={`px-4 py-2 rounded font-medium flex items-center gap-2 whitespace-nowrap ${activeTab === 'news' ? 'bg-primary-900 text-white' : 'bg-white text-stone-600 border border-stone-200'}`}
          >
            <FileText size={18} /> Manajemen Berita
          </button>
        </div>

        {activeTab === 'registrations' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-stone-800">Daftar Klien / Kontak</h2>
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200 text-sm text-stone-600">
                    <th className="p-4 font-semibold">Tanggal</th>
                    <th className="p-4 font-semibold">Nama</th>
                    <th className="p-4 font-semibold">Kontak</th>
                    <th className="p-4 font-semibold">Keperluan</th>
                    <th className="p-4 font-semibold">Status</th>
                    <th className="p-4 font-semibold text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {registrations.map((reg) => (
                    <tr key={reg.id} className="border-b border-stone-100 hover:bg-stone-50">
                      <td className="p-4 text-stone-500 whitespace-nowrap">
                        {reg.createdAt && new Date(reg.createdAt.seconds * 1000).toLocaleString('id-ID')}
                      </td>
                      <td className="p-4 font-medium text-stone-800">{reg.name}</td>
                      <td className="p-4 text-stone-600">
                        {reg.phone}<br/>
                        <span className="text-xs text-stone-400">{reg.email}</span>
                      </td>
                      <td className="p-4">
                        <span className="inline-block bg-primary-50 text-primary-800 px-2 py-1 rounded text-xs">
                          {reg.subject}
                        </span>
                      </td>
                      <td className="p-4">
                        {reg.status === 'new' && <span className="text-orange-600 font-medium">Baru</span>}
                        {reg.status === 'processed' && <span className="text-blue-600 font-medium">Diproses</span>}
                        {reg.status === 'closed' && <span className="text-green-600 font-medium">Selesai</span>}
                      </td>
                      <td className="p-4 text-right space-x-2 whitespace-nowrap">
                        {reg.status !== 'processed' && (
                          <button onClick={() => updateStatus(reg.id, 'processed')} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded bg-white border border-stone-100 shadow-sm" title="Tandai Diproses">
                            <CheckCircle size={18} />
                          </button>
                        )}
                        {reg.status !== 'closed' && (
                          <button onClick={() => updateStatus(reg.id, 'closed')} className="p-1.5 text-green-600 hover:bg-green-50 rounded bg-white border border-stone-100 shadow-sm" title="Tandai Selesai">
                            <CheckCircle size={18} />
                          </button>
                        )}
                        <button onClick={() => deleteRegistration(reg.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded bg-white border border-stone-100 shadow-sm" title="Hapus">
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {registrations.length === 0 && (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-stone-500">
                        Belum ada data klien yang terdaftar.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'news' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-stone-800">Manajemen Berita & Artikel</h2>
              {!showNewsForm && (
                <button 
                  onClick={() => { resetNewsForm(); setShowNewsForm(true); }}
                  className="bg-primary-700 hover:bg-primary-800 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
                >
                  <Plus size={18} /> Tulis Berita
                </button>
              )}
            </div>

            {showNewsForm ? (
              <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 mb-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-stone-800">{editingNewsId ? 'Edit Berita' : 'Tulis Berita Baru'}</h3>
                  <button onClick={() => setShowNewsForm(false)} className="text-stone-400 hover:text-stone-600 p-2"><X size={20}/></button>
                </div>
                <form onSubmit={handleNewsSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-1.5">Judul Berita</label>
                    <input 
                      type="text" required maxLength={200}
                      value={newsForm.title} onChange={e => setNewsForm({...newsForm, title: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="Masukkan judul..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-1.5">Gambar Sampul</label>
                    <div className="flex items-center gap-4">
                      {newsForm.imageUrl && (
                        <div className="h-20 w-32 border border-stone-200 rounded-lg overflow-hidden flex-shrink-0 bg-stone-100">
                          <img src={newsForm.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="flex-1">
                        <input 
                          type="file" 
                          accept="image/*"
                          onChange={handleImageUpload}
                          disabled={isUploading}
                          className="w-full text-sm text-stone-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        {isUploading && (
                          <p className="text-xs text-primary-600 mt-2 font-medium flex items-center gap-1">
                            <span className="w-4 h-4 rounded-full border-2 border-primary-600 border-t-transparent animate-spin inline-block"></span>
                            Mengunggah gambar...
                          </p>
                        )}
                        {!isUploading && !newsForm.imageUrl && (
                          <p className="text-xs text-stone-500 mt-2">Format: JPG, PNG. Ukuran ideal 800x600px.</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-1.5">Konten Berita</label>
                    <div className="bg-white rounded-lg overflow-hidden border border-stone-300 focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-200 transition-all">
                      <ReactQuill 
                        theme="snow"
                        value={newsForm.content}
                        onChange={(content) => setNewsForm({...newsForm, content})}
                        className="h-64"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4 pt-10 mb-6">
                    <input 
                      type="checkbox" id="published"
                      checked={newsForm.published} onChange={e => setNewsForm({...newsForm, published: e.target.checked})}
                      className="w-4 h-4 text-primary-600 bg-stone-100 border-stone-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="published" className="text-sm font-medium text-stone-700 cursor-pointer">
                      Publikasikan berita ini segera
                    </label>
                  </div>
                  <div className="flex justify-end gap-3 pt-4 border-t border-stone-100">
                    <button type="button" onClick={() => setShowNewsForm(false)} className="px-5 py-2.5 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-50 font-medium transition-colors">
                      Batal
                    </button>
                    <button type="submit" className="px-5 py-2.5 rounded-lg bg-primary-700 text-white font-medium hover:bg-primary-800 transition-colors">
                      {editingNewsId ? 'Simpan Perubahan' : 'Terbitkan Berita'}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {newsList.map(news => (
                  <div key={news.id} className="bg-white border text-left border-stone-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                    {news.imageUrl && (
                      <div className="h-40 overflow-hidden bg-stone-100">
                        <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${news.published ? 'bg-green-100 text-green-700' : 'bg-stone-100 text-stone-600'}`}>
                          {news.published ? 'Live' : 'Draft'}
                        </span>
                        <span className="text-xs text-stone-400">
                          {news.createdAt && new Date(news.createdAt.seconds * 1000).toLocaleDateString('id-ID')}
                        </span>
                      </div>
                      <h3 className="font-bold text-stone-900 mb-2 line-clamp-2">{news.title}</h3>
                      <p className="text-sm text-stone-500 flex-1 line-clamp-3 mb-4">{news.content}</p>
                      
                      <div className="flex justify-end gap-2 pt-3 border-t border-stone-100 mt-auto">
                        <button onClick={() => editNews(news)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                          <Edit2 size={16} />
                        </button>
                        <button onClick={() => deleteNews(news.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Hapus">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {newsList.length === 0 && (
                  <div className="col-span-full bg-white border border-stone-200 rounded-xl p-12 text-center">
                    <FileText size={48} className="mx-auto text-stone-300 mb-4" />
                    <h3 className="text-lg font-bold text-stone-800 mb-2">Belum ada berita</h3>
                    <p className="text-stone-500 text-sm">Klik tombol "Tulis Berita" di atas untuk membuat artikel pertama Anda.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
