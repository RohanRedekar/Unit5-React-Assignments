import axios from "axios";
import { useState, useEffect } from "react";
import "./restaurantDetails.css";

export const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get("http://localhost:8080/restaurants")
      .then((d) => setRestaurants(d.data))
      .catch((err) => console.log(err));
  }

  const handleFilter = (e) => {
    switch (e.target.value) {
      case "1":
        setRestaurants(data.filter((el) => el.rating >= 1));
        break;
      case "2":
        setRestaurants(data.filter((el) => el.rating >= 2));
        break;
      case "3":
        setRestaurants(data.filter((el) => el.rating >= 3));
        break;
      case "4":
        setRestaurants(data.filter((el) => el.rating >= 4));
    }
  };

  const handleSort = (e) => {
    if (e.target.value == "HL") {
      setRestaurants([...restaurants].sort((a, b) => b.ratings - a.ratings));
    } else if (e.target.value == "LH") {
      setRestaurants([...restaurants].sort((a, b) => a.ratings - b.ratings));
    }
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
            <p>
              {r.payment_methods.cash
                ? "Accept cash payments only"
                : "Accept online payments only"}
            </p>
            <div className='payment_opt'>
              {!r.payment_methods.cash && (
                <input
                  type='radio'
                  name='payment_method'
                  id='card'
                  value='card'
                />
              )}
              {!r.payment_methods.cash && <label for='card'>Card</label>}
              {!r.payment_methods.cash && (
                <input
                  type='radio'
                  name='payment_method'
                  id='upi'
                  value='upi'
                />
              )}
              {!r.payment_methods.cash && <label for='upi'>UPI</label>}

              {r.payment_methods.cash && (
                <input
                  type='radio'
                  name='payment_method'
                  id='cash'
                  value='cash'
                />
              )}
              {r.payment_methods.cash && <label for='cash'>Cash</label>}
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
