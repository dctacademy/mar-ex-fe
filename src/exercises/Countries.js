export default function CountryList(){
    const countries = [
        {
          name: "United States",
          capital: "Washington, D.C.",
          population: 331002651
        },
        {
          name: "Canada",
          capital: "Ottawa",
          population: 37742154
        },
        {
          name: "United Kingdom",
          capital: "London",
          population: 67886011
        },
        {
          name: "Australia",
          capital: "Canberra",
          population: 25499884
        },
        {
          name: "Japan",
          capital: "Tokyo",
          population: 126476461
        }
      ];
      
      const handleShow = (ele) => {
        alert(`${ele.name}, ${ele.capital}, ${ele.population}`)
      }

      const calcTotal = () => {
        const total = countries.reduce((acc,cv) => { 
            return acc + cv.population
        }, 0)
        alert('Total Population ' + total)
      }

      return (
        <div>
            <h2>Listing Countries - { countries.length } </h2>
            <ul>
                { countries.map((ele, i) => {
                    return <li key={i}> { ele.name } <button onClick={() => {
                        handleShow(ele)
                    }}>show</button> </li>
                })}
            </ul>
            <button onClick={calcTotal}>Total Population</button>
        </div>
      )
      
}