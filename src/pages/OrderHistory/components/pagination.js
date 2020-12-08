import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";
import { fetchOrder } from '../../../action/historyActions';

const ArrowLeft = <FontAwesomeIcon icon={faArrowLeft} />
const ArrowRight = <FontAwesomeIcon icon={faArrowRight} />

class Pagination extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pageNumbers: [],
      currentPage: 1
    }
  }

  componentDidMount = async() => {
    const { fetchOrder } = this.props;
    await fetchOrder();
    const {orders: {orders, total}} = this.props
    const pageSize = orders.length;
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(total/pageSize); i++){
      pageNumbers.push(i)
    }
    this.setState({
      pageNumbers: pageNumbers
    })
  }
  
  render(){
    return (
      <div className="pagination">
          <div className="previouspage"><a onClick={this.leftArr}>{ArrowLeft}</a></div>
              <div className="pagenumber">
                  {this.state.pageNumbers.map(
                    page =>  (
                      <a className="actived">{page}</a>
                    )
                  )}
              </div>
          <div className="nextpage"><a onClick={this.rightArr}>{ArrowRight}</a></div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const { historyReducer: { loading, orders } } = state;
  return {
    loading,
    orders
  }
};

const mapActionToProps = dispatch => {
  return {
    fetchOrder: () => dispatch(fetchOrder())
  }
}

export default connect(mapStateToProps,mapActionToProps)(Pagination);

