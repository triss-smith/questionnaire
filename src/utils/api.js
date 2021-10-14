const API_BASE_URL = "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";
const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
    try {
      const response = await fetch(url, options);
  
      if (response.status === 204) {
        return null;
      }
  
      const payload = await response.json();
  
      if (payload.error) {
        return Promise.reject({ message: payload.error });
      }
      return payload.data;
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error(error.stack);
        throw error;
      }
      return Promise.resolve(onCancel);
    }
  }

  export async function listQuestions(signal) {
    try{
    const response = await fetch(API_BASE_URL);
    const responseJson = await response.json();
    return responseJson;
    } catch(error) {
      console.log(error)
    }
  }

  
