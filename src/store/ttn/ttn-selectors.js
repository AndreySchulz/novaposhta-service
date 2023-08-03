export const selectInfo = state => state.info.ttnInfo;

export const selectError = state => state.info.infoError;

export const selectNumbersList = state => state.info.ttnNumbersList;

export const selectSelectedNumber = state => state.info.selectedNumber;

export const selectDepartmentsList = state => state.info.departmentsList;

export const selectDepartmentsError = state => state.info.departmentsError;

export const selectPage = state => state.info.page;

export const selectCity = state => state.info.city;

export const selectTotalCount = state => state.info.totalCount;

export const selectIsLoading = state => state.info.isLoading;