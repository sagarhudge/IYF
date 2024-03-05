class APIResponseHelper {
  static async parseResponse2(response: any) {
    try {
      console.error('parseResponse', JSON.parse(response));

      const parsedResponse = await response.json();
      return parsedResponse;
    } catch (error) {
      console.error('Error parsing API response:', error);
      throw new Error('Failed to parse API response');
    }
  }

  static async parseResponse(response: any) {
    try {

      const responseText = await response.text();

      const parsedResponse = JSON.parse(responseText.trim()); // Trim whitespace before parsing

      return parsedResponse;
    } catch (error) {
      console.error('Error parsing API response:', error);
      throw new Error('Failed to parse API response');
    }
  }

  static async handleResponse(response: any) {
    console.log('handleResponse', response)

    if (!response.ok) {
      const errorMessage = await APIResponseHelper.parseError(response);
      console.error('error_handled', JSON.parse(response));
      throw new Error(errorMessage);
    } else {
      try {
        return await APIResponseHelper.parseResponse(response);
      } catch (error) {
        console.error('Error handling API response:', error);
        throw new Error('Failed to handle API response');
      }
    }
  }

  static async parseError(response: any) {
    try {
      console.error('errorData', JSON.parse(response))

      const contentType = response?.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        const errorData = await response.json();
        console.error('errorData', errorData)
        if (errorData && errorData.message) {
          return errorData.message;
        } else {
          return 'Unknown error occurred';
        }
      } else {
        return 'Error response is not in JSON format';
      }
    } catch (error) {
      console.error('Error parsing API error response:', error);
      return 'Failed to parse API error response';
    }
  }
}

export default APIResponseHelper;
