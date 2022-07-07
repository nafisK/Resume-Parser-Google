import { React } from "react"

export default function TableList({ data }) {
  console.log(data)
  return (
    <>
      <tr className='whitespace-nowrap'>
        <td className='px-6 py-4 text-sm text-gray-500'>
          {data.id.substring(1, 5)}
        </td>
        <td className='px-6 py-4'>{data.name}</td>
        <td className='px-6 py-4'>{data.email}</td>
        <td>{data.number}</td>
        <td className='px-6 py-4 text-sm text-gray-500'>
          {`${data.created.toDate().getMonth() + 1}/${data.created
            .toDate()
            .getDate()}/${data.created.toDate().getFullYear()}`}
        </td>
        <td className='px-6 py-4 text-center'>
          {" "}
          <a href={data.fileUrl} target='_blank'>
            🔗
          </a>
        </td>
      </tr>
    </>
  )
}
