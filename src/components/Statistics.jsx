import React from "react";
import PropTypes from 'prop-types';
import '../styles/Statistics.css';

function Statistics({ title, stats }) {
    return (
        <section className='statistics'>
            <h2 className='title'>{title}</h2>
            <ul className='stat-list'>
                {stats.map(stat => (
                    <li
                        key={stat.id}
                        className='item'
                        style={{ backgroundColor: setRandomBgColor() }} >
                        <span className='label'>{stat.label}</span>
                        <span className='percentage'>{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ),
  };

  function setRandomBgColor() {
    return `rgb(${Math.round(Math.random() * (255 - 0) + 1)}, ${Math.round(
      Math.random() * (255 - 0) + 1,
    )}, ${Math.round(Math.random() * (255 - 0) + 1)})`;
  }

export default Statistics;