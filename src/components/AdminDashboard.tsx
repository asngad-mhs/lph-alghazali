import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType, auth } from '../firebase';
import { LogOut, Trash2, CheckCircle, XCircle } from 'lucide-react';
import { signOut } from 'firebase/auth';

export default function AdminDashboard({ isAdmin }: { isAdmin: boolean }) {
  const [registrations, setRegistrations] = useState<any[]>([]);

  useEffect(() => {
    if (!isAdmin) return;
    
    const q = query(collection(db, 'registrations'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setRegistrations(data);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, 'registrations');
    });

    return () => unsubscribe();
  }, [isAdmin]);

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, 'registrations', id), {
        status: newStatus
      });
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

  if (!isAdmin) return null;

  return (
    <div className="fixed inset-0 bg-stone-100 z-[200] overflow-y-auto">
      <div className="bg-primary-900 text-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold font-serif">LPH Dashboard Admin</h1>
        </div>
        <button 
          onClick={() => signOut(auth)}
          className="flex items-center gap-2 bg-primary-800 hover:bg-red-600 px-4 py-2 rounded transition-colors"
        >
          <LogOut size={16} /> Keluar
        </button>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6 text-stone-800">Daftar Klien / Kontak</h2>
        <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
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
                  <td className="p-4 text-right space-x-2">
                    {reg.status !== 'processed' && (
                      <button onClick={() => updateStatus(reg.id, 'processed')} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded" title="Tandai Diproses">
                        <CheckCircle size={18} />
                      </button>
                    )}
                    {reg.status !== 'closed' && (
                      <button onClick={() => updateStatus(reg.id, 'closed')} className="p-1.5 text-green-600 hover:bg-green-50 rounded" title="Tandai Selesai">
                        <CheckCircle size={18} />
                      </button>
                    )}
                    <button onClick={() => deleteRegistration(reg.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded" title="Hapus">
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
    </div>
  );
}
