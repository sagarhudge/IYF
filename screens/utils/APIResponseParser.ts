class APIResponseHelper {
    static async parseResponse(response:any) {
        try {
            const parsedResponse = await response.json();
            return parsedResponse;
        } catch (error) {
            console.error('Error parsing API response:', error);
            throw new Error('Failed to parse API response');
        }
    }

    static async handleResponse(response:any) {
        if (!response.ok) {
            const errorMessage = await APIResponseHelper.parseError(response);
            throw new Error(errorMessage);
        }
        try {
            return await APIResponseHelper.parseResponse(response);
        } catch (error) {
            console.error('Error handling API response:', error);
            throw new Error('Failed to handle API response');
        }
    }

    static async parseError(response:any) {
        try {
            const errorData = await response.json();
            if (errorData && errorData.message) {
                return errorData.message;
            } else {
                return 'Unknown error occurred';
            }
        } catch (error) {
            console.error('Error parsing API error response:', error);
            return 'Failed to parse API error response';
        }
    }
}

export default APIResponseHelper;
