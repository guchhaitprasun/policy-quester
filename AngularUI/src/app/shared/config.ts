class APIUrls {
    baseURL = "http://localhost:6696"

    commonAPI = {
        search: this.baseURL+'/api/common/searchPolicies/', 
        getFuelTypes: this.baseURL+'/api/common/getFuelType', 
        getRegions: this.baseURL+'/api/common/getRegion',
        getVehicleType: this.baseURL+'/api/common/getVehicleType',
        getChartData: this.baseURL+'/api/common/GetChartData/', 
        getCustomerName: this.baseURL +'/api/common/GetCustomerName/', 
        getFuelSegment: this.baseURL +'/api/common/GetFuelSegment/', 
        getVehicleSegment: this.baseURL +'/api/common/GetVehicleSegment/'
    }

    policiesAPI = {
        getAllPolicies : this.baseURL+'/api/policies', 
        addNewPolicy: this.baseURL+'/api/policies/addPolicy',
        updateExistingPolicy: this.baseURL+'/api/policies/updatePolicy/',
        deletePolicy: this.baseURL+'/api/policies/removePolicy/'
    }

    customerAPI = {
        getAllCustomers: this.baseURL+'/api/customers',
        searchCustomer: this.baseURL+'/api/customers/searchCustomer/', 
        getCustomer: this.baseURL+'/api/customers/'
    }


}

class Labels {
    policyID = "POLICY ID:"
    purchasedOn = "Purchased On"
    customerID = "CUSTOMER ID:"
    customerName = "CUSTOMER NAME:"
}

class AppConstants {
    private constructor() {
        AppConstants._instance = this
    }
    private static _instance: AppConstants;
    public APIUrls = new APIUrls();
    public labels = new Labels();

    public static getInstance(): AppConstants {
        return this._instance || new AppConstants();
    }
}

export const appConstants = AppConstants.getInstance();