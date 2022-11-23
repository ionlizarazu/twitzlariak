import { useEffect, useState } from 'react';
import { dynamicSort } from '../utils';
export const useFilteredPagination = (original_data) => {
  const [originalDataList, setOriginalDataList] = useState(original_data);
  const [dataList, setDataList] = useState(original_data);
  const [paginationSize, setPaginationSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState(
    original_data.slice(
      (currentPage - 1) * paginationSize,
      (currentPage - 1) * paginationSize + paginationSize,
    ),
  );
  const [filters, setFilters] = useState({});
  const applyFilter = (e, { value }, field, setter) => {
    const new_filters = { ...filters, [field]: value };
    setFilters(new_filters);
  };

  const applyOrder = (criteria) => {
    setDataList([...dataList.sort(dynamicSort(criteria))]);
  };
  const clearFilters = () => {
    setDataList(originalDataList);
    setFilters({});
  };
  useEffect(() => {
    let filtered_data_list = [...originalDataList];
    Object.entries(filters).forEach((filter) => {
      const filter_key = filter[0];
      const filter_data = filter[1];
      if (filter_data.length > 0) {
        filtered_data_list = filtered_data_list.filter((data) => {
          return filter_data.includes(data[filter_key]);
        });
      }
    });
    setDataList(filtered_data_list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  useEffect(() => {
    setPagination(
      dataList.slice(
        (currentPage - 1) * paginationSize,
        (currentPage - 1) * paginationSize + paginationSize,
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataList, currentPage, paginationSize]);

  return {
    functions: {
      setCurrentPage,
      setPaginationSize,
      applyFilter,
      setDataList,
      setOriginalDataList,
      clearFilters,
      applyOrder,
    },
    data: {
      pagination,
      currentPage,
      paginationSize,
      originalDataList,
      dataList,
      filters,
    },
  };
};
