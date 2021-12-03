import {useEffect, useState, Fragment} from 'react';
import Card from '../UI/Card';
import Spinner from '../UI/Spinner';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import axios from 'axios';

const AvailableMeals = () => {
    const [foodlist, setFoodList] = useState([]);
    const [isLoading, setLoading] = useState(true);
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
               setLoading(false);
           }).catch(function (error) {
               setLoading(false);
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
        <Fragment>
            {!isLoading && <Card>{mealsList}</Card>}
            {isLoading && <Spinner />}
        </Fragment>
    );
};

export default AvailableMeals;