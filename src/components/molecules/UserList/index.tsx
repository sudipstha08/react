export const UserList = ({ data }) => {
  return (
    <div>
      <input type="text" placeholder="testing" />
      <ul className="testing">
        {data.map(item => (
          <li key={item.id}>
            {item.id}
            {item.first_name},{item.last_name},{item.email}
          </li>
        ))}
      </ul>
    </div>
  )
}
