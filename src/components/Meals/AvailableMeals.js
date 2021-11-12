import {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import axios from 'axios';

const AvailableMeals = () => {
    const [foodlist, setFoodList] = useState([]);
    var options = {
        method: 'GET',
        url: 'https://burgers1.p.rapidapi.com/burgers',
        headers: {
            'x-rapidapi-host': 'burgers1.p.rapidapi.com',
            'x-rapidapi-key': '5b773c1134msh3115a8a8c35beddp164679jsn7e57dd19ba05'
        }
    };

    useEffect(() => {
       async function getData(){
           await axios.request(options).then(function (response) {
               setFoodList(response.data);
           }).catch(function (error) {

           });
       }
        getData();
    },[]);

    const mealsList = foodlist.map((meal) => (

        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            restaurant={meal.restaurant}
            web={meal.web}
            price={meal.ingredients.length}
        />
    ));

    return (
       /* <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>

        */
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-6 mx-auto">
                    <div className="row gy-sm-1">
                        {mealsList}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AvailableMeals;