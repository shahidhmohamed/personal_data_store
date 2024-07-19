import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";

type PersonalData = {
  _id: string;
  name: string;
  email: string;
  age: number;
};

export default function AllPersonalData() {
  const [personalDatas, setPersonalDatas] = useState<PersonalData[]>([]);

  useEffect(() => {
    // Fetch personal data when component mounts
    const fetchPersonalDatas = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/personal_datas"
        );
        setPersonalDatas(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPersonalDatas();
  }, []);

  const onDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/personal_datas/${id}`);
      setPersonalDatas((prevData) =>
        prevData.filter((data) => data._id !== id)
      );
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-amber-400">
            <th className="py-4 px-8 border-b">Name</th>
            <th className="py-4 px-8 border-b">Email</th>
            <th className="py-4 px-8 border-b">Age</th>
          </tr>
        </thead>
        <tbody>
          {personalDatas.length > 0 ? (
            personalDatas.map((data) => (
              <tr key={data._id} className="hover:bg-red-600">
                <td className="py-4 px-8 border-b">{data.name}</td>
                <td className="py-4 px-8 border-b">{data.email}</td>
                <td className="py-4 px-8 border-b">{data.age}</td>
                <td className="py-4 px-8 border-b text-center">
                  <button
                    onClick={() => onDelete(data._id)}
                    className="text-red-700 hover:text-red-900"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={4}
                className="py-2 px-4 border-b text-center text-red-700"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
