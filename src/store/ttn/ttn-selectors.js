export const selectInfo = state => state.info.ttnInfo;

export const selectError = state => state.info.infoError;

export const selectNumbersList = state => state.info.ttnNumbersList;

export const selectDepartmentsList = state => state.info.departmentsList;

export const selectDepartmentsError = state => state.info.departmentsError;

export const selectTotalCount = state => state.info.totalCount;

export const selectIsLoading = state => state.info.isLoading;
