import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseList = ({ id, description, amount, createdAt}, props) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {moment(createdAt).format('ddd Do, YYYY')}</p>
    </div>
);

export default ExpenseList;