import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { commodityItem } from '../../components/NavName/NavName';
import './ProductList.scss';

const sortingMappings = {
  랭킹순: 'ranking',
  신규등록순: 'regist',
  낮은가격순: 'low_price',
  높은가격순: 'high_price',
  상품평많은순: 'review',
  판매량순: 'sale',
};

//usetSate
const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [backendData, setBackendData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [totalCounts, setTotalCounts] = useState(0);
  const handleOptionChange = option => {
    setSearchParams({ ...searchParams, sort_by: option });
  };

  const category = searchParams.get('category_id') || 1;
  const sort_by = searchParams.get('sort_by');
  const sub_category = searchParams.get('sub_category_id');
  const offset = Number(searchParams.get('offset') || 0);

  const currentSort = sortingMappings[sort_by];

  const handleButtonClick = sub_category_id => {
    // 해당 카테고리 아이디로 쿼리 스트링 업데이트
    searchParams.set('sub_category_id', sub_category_id);
    setSearchParams(searchParams);
  };

  // 페이지네이션 관련 상태
  const pageCount = Math.ceil(totalCounts / itemsPerPage);

  // 페이지 변경 핸들러
  const handlePageChange = pageNumber => {
    searchParams.set('offset', pageNumber - 1);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    fetch(
      `http://10.58.52.88:8000/products?page=${offset + 1}&category_id=${
        category || 1
      }&sub_category_id=${sub_category || null}&sort_by=${
        currentSort || 'sale'
      }`,
      // '/data/productList.json'
    )
      .then(response => response.json())
      .then(result => {
        setBackendData(result.sortData);
        setTotalCounts(result.categoryTotal[0].total_amount);
      });
  }, [searchParams]);

  return (
    <div className="ListHighestContainer">
      <div className="ListMainContainer">
        <div className="IntroMainContainer">
          <h1 className="titleName">
            {Object.values(commodityItem)[category - 1]}
          </h1>
          <div className="IntroducecommentDiv">
            <p className="shopComment">
              부츠, 슈즈, 샌들 등 닥터마틴의
              {Object.values(commodityItem)[category - 1]}용 신발들을 한 번에
              모아서 구경하세요.
            </p>
          </div>
          <div className="selectProductBox">
            <div className="buttonDiv">
              <button
                className="allWatchButton"
                onClick={() => handleButtonClick(null)}
              >
                전체보기
              </button>
            </div>
            <div className="buttonDiv">
              <button
                className="bootsButton"
                onClick={() => handleButtonClick(1)}
              >
                부츠
              </button>
            </div>
            <div className="buttonDiv">
              <button
                className="shoesButton"
                onClick={() => handleButtonClick(2)}
              >
                슈즈
              </button>
            </div>
            <div className="buttonDiv">
              <button
                className="sandleButton"
                onClick={() => handleButtonClick(3)}
              >
                샌들
              </button>
            </div>
          </div>
        </div>
        <div className="NavigateContainer">
          <span className="showComment">
            {totalCounts}개의 상품이 있습니다.
          </span>
          <div className="customSelect">
            <select
              className="alignmentSelect"
              value={sort_by}
              defaultValue="판매량순"
              onChange={e => handleOptionChange(e.target.value)}
            >
              {Object.keys(sortingMappings).map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="liner">
          <hr className="separateLine" />
        </div>
        <div className="pageContainer">
          <div className="shopImageDiv">
            {backendData.map(product => {
              const formatter = new Intl.NumberFormat('ko-KR', {
                style: 'currency',
                currency: 'KRW',
              });
              const number = product.price;
              const formattedNumber = formatter.format(number);
              return (
                <div className="dmkPrdItm__img" key={product.id}>
                  <a href={`/goods/view?no=${product.id}`}>
                    <img
                      src={product.productThumbnail}
                      data-src={product.productThumbnail}
                      className="goodsDisplayImage lazyload"
                      onError={e =>
                        (e.target.src =
                          '/data/skin/responsive_ver1_default_gl/images/common/noimage.gif')
                      }
                      alt={product.product_name}
                    />
                  </a>
                  <div className="productDiv">
                    <span className="productInformation">
                      {product.product_name}
                    </span>
                  </div>
                  <div className="productDiv">
                    <span className="productInformation">
                      {formattedNumber}
                    </span>
                  </div>

                  <button
                    className="dmkCrt"
                    // onClick={() => quickCartView(product.id)}
                  />
                </div>
              );
            })}
          </div>
          <div className="pagination">
            <ul>
              {Array.from({ length: pageCount }).map((_, index) => (
                <li key={index}>
                  <button onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
