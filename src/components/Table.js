import { collection, getDocs } from "firebase/firestore"
import { React, useState, useEffect } from "react"
import { db } from "../firebase"
import TableList from "./TableList"

export default function Table() {
  const [data, setResumes] = useState([])
  const usersCollectionRef = collection(db, "resumes")

  useEffect(() => {
    const getResumes = async () => {
      const data = await getDocs(usersCollectionRef)
      setResumes(data.docs.map(docs => ({ ...docs.data(), id: docs.id })))
    }

    getResumes()
  }, [])

  return (
    <div className='container flex justify-center mx-auto '>
      <div className='flex flex-col '>
        <div className='w-full '>
          <div className='border-b border-gray-200 shadow '>
            <table className='table-auto'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-6 py-2 text-xs text-gray-500'>ID</th>
                  <th className='px-6 py-2 text-xs text-gray-500'>Name</th>
                  <th className='px-6 py-2 text-xs text-gray-500'>Email</th>
                  <th className='px-6 py-2 text-xs text-gray-500'>Number</th>
                  <th className='px-6 py-2 text-xs text-gray-500'>
                    Applied On
                  </th>
                  <th className='px-6 py-2 text-xs text-gray-500'>
                    Resume URL
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                {data.map(resume => (
                  <TableList data={resume} key={resume.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
