import { useEffect } from "react";

function Items() {
    const restaurentlsit = async () => {
      const data  =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66500&lng=77.44770&is-seo-homepage-enabled=true&page")
        const restaurrentlist = await data.json()
        console.log(restaurentlsit)
    

}


    useEffect(() => {
        


    },[])
    
    return (
        <main>
            <div className="restaurent">
                
                
</div>

        </main>

    )
}
export default Items;