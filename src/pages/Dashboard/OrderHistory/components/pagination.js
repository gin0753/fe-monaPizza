import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";
import { updateOrderHistory } from "../../../../action/orderHistoryPagination";
import './pagination.scss';
import Axios from 'axios';

const ArrowLeft = <FontAwesomeIcon icon={faArrowLeft} />
const ArrowRight = <FontAwesomeIcon icon={faArrowRight} />

class Pagination extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pageNumbers: []
    }
  }

  componentDidMount = async() => {
    const { page, pageSize, userId } = this.props.state;
    const res = await Axios.get(`/order/${userId}/${page}/${pageSize}`);
    const { total } = res.data
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(total/pageSize); i++){
      pageNumbers.push(i)
    }
    this.setState({
      pageNumbers: pageNumbers
    })
  }

  render(){
    const { updateOrderHistory, state } = this.props;
    return (
      <div className="pagination">
          <div className="previouspage"><a href="/" onClick={this.props.leftArr}>{ArrowLeft}</a></div>
              <div className="pagenumber">
                  {this.state.pageNumbers.map(
                    (page, index) =>  (
                      <a href="/" key={index} className={page === state.page ? "actived currentPage" : "actived"} 
                      onClick={(e)=>{
                      e.preventDefault();
                      updateOrderHistory({
                        pageNum: page
                      })  
                      }}>{page}</a>
                    )
                  )}
              </div>
          <div className="nextpage"><a href="/" onClick={this.props.rightArr}>{ArrowRight}</a></div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const {
    updateOrderHistory: { pageNum },
  } = state;
  return {
    pageNum
  };
};

const mapActionToProps = {
    updateOrderHistory
};

export default connect(mapStateToProps, mapActionToProps)(Pagination);


