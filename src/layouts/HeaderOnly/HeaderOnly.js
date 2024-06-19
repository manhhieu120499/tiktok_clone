import Header from '~/layouts/components/Header';
import PropTypes from 'prop-types';
function HeaderOnly({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </>
    );
}

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
