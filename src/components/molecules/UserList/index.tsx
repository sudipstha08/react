export const UserList = ({ data, handleClick }) => {
  return (
    <div>
      <input type="text" placeholder="testing" />
      <button> Submit </button>
      <button> Apply</button>
      <ul className="testing">
        {data.map(item => (
          <li key={item.id}>
            {item.id}
            {item.first_name},{item.last_name},
            <a
              onClick={() => {
                handleClick()
              }}
              href="/"
            >
              {item.email}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
