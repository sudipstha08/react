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
                console.log('email link clicked')
                handleClick()
              }}
            >
              {item.email}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
