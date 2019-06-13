import React from 'react';
import New from './New';
import PropTypes from 'prop-types';

const NewsList = ({ noticias }) => {
    return (
        <div className="row">
            {noticias.map(noticia => (
                <New key={noticia.url} noticia={noticia} />
            ))}
        </div>
    );
};

/**
 * PropTypes
 */
NewsList.propTypes = {
    noticias: PropTypes.array.isRequired
};

export default NewsList;
