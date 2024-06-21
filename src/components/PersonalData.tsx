import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";

type PersonalData = {
  _id: string;
  name: string;
  email: string;
  age: number;
};

export default function PersonalDatas() {
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
    <div className="max-w-md mx-auto">
      {personalDatas.length > 0 ? (
        personalDatas.map((data) => (
          <div key={data._id} className="flex items-center gap-1 mb-2">
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50 grow">
              <span className="text-gray-700">{data.name}</span>
              <span className="text-gray-700">{data.email}</span>
              <span className="text-gray-700">{data.age}</span>
            </label>
            <button onClick={() => onDelete(data._id)} className="p-2">
              <Trash2 size={20} className="text-gray-500" />
            </button>
          </div>
        ))
      ) : (
        <p className="text-white">No data available</p>
      )}
    </div>
  );
}
