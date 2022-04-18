import { useState, useEffect } from "react";
import { render } from "react-dom";
import "./restaurantDetails.css";

export const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("http://localhost:8080/restaurants").then((d) =>
      d.json()
    );
    // setRestaurants(data);
    setRestaurants(data);
  };

  const handleFilter = () => {
    console.log("filter");
  };

  const handleSort = () => {
    const selected = document.getElementById("sort_select").value;
    if (selected == "HL") {
      restaurants.sort(function (a, b) {
        return parseInt(b.ratings) - parseInt(a.ratings);
      });
    }
    if (selected == "LH") {
      restaurants.sort(function (a, b) {
        return Number(a.ratings) - Number(b.ratings);
      });
    }
    // console.log(restaurants);
    // console.log(selected);
  };

  return (
    <div>
      <div>
        <select onChange={handleFilter} name='' id=''>
          <option value=''>select</option>
          <option value='4'>Above 4</option>
          <option value='3'>Above 3</option>
          <option value='2'>Above 2</option>
          <option value='1'>Above 1</option>
        </select>
        <select onChange={handleSort} name='' id='sort_select'>
          <option value=''>select</option>
          <option value='HL'>high to low</option>
          <option value='LH'>low to high</option>
        </select>
      </div>
      {restaurants.map((r) => (
        <div className='container'>
          <div className='image'>
            <img src={r.url} alt='' />
          </div>
          <div className='details'>
            <h2>{r.name}</h2>
            <p className='gray'>{r.categories.toString()}</p>
            <p className='gray'>cost ₹{r.cost_for_one} for one</p>
            <p>Accepts online payments only</p>
            <div className='payment_opt'>
              <input
                type='radio'
                name='payment_method'
                id='card'
                value='card'
              />
              <label for='cash'>Card</label>
              <input
                type='radio'
                name='payment_method'
                id='cash'
                value='cash'
              />
              <label for='cash'>Cash</label>
              <input type='radio' name='payment_method' id='upi' value='upi' />
              <label for='upi'>UPI</label>
            </div>
          </div>
          <div className='feedbacks'>
            <div className='rating'>
              <h2>{r.ratings}</h2>
            </div>
            <p className='vr'>{r.votes} votes</p>
            <p className='vr'>{r.reviews} reviews</p>
          </div>
        </div>
      ))}
    </div>
  );
};
