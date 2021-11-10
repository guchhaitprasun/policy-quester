class APIUrls {
    baseURL = "http://localhost:6696"

    commonAPI = {
        search: this.baseURL+'/api/common/searchPolicies/', 
        getFuelTypes: this.baseURL+'/api/common/getFuelType', 
        getVehicleType: this.baseURL+'/api/common/getVehicleType'
    }

    policiesAPI = {
        getAllPolicies : this.baseURL+'/api/policies', 
        addNewPolicy: this.baseURL+'/api/policies/addPolicy'
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