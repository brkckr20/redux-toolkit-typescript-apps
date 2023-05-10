import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters } from '../../redux/characterSlice';

const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.characters);

    useEffect(() => {
        dispatch(fetchCharacters())
    }, [])

    return (
        <div>Home</div>
    )
}

export default Home