export class Launch {


public id: string = "";
url : string =  "";
slug: string = "";
name: string ="";
image: string ="";
status = {
    "id": 2147483647,
    "name": "string",
    "abbrev": "string",
    "description": "string"
  };

window_start: Date = new Date();

rocket = {
    id: 0,
    configuration: {
      "id": 0,
      "url": "string",
      "name": "string",
      "family": "string",
      "full_name": "string",
      "failed_launches": "string",
      "successful_launches": "string",
      "total_launch_count": "string",
      "consecutive_successful_launches": "string",
      "description": "string"
    }

};
  pad = {
    "id": 0,
    "url": "string",
    "agency_id": 2147483647,
    "name": "string",
    "info_url": "string",
    "wiki_url": "string",
    "map_url": "string",
    "latitude": "string",
    "longitude": "string",
    location: {
      "id": 0,
      "url": "string",
      "name": "string",
      "country_code": "string",
      "map_image": "string",
      "total_launch_count": 2147483647,
      "total_landing_count": 2147483647
    },
    "map_image": "string",
    "total_launch_count": 2147483647,
    "orbital_launch_attempt_count": 2147483647,
  };
}
    
  
