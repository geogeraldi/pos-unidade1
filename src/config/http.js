import axios from 'axios';

export const moviesApis = axios.create({ 
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzA2MTQzZWE1ZjA4NGJlNzUzZGRjMjhhZmQ2YTk3MyIsIm5iZiI6MTc0NDEzNDkwNC40ODk5OTk4LCJzdWIiOiI2N2Y1NjJmODdiNDNiZGNlMjBhZDk4YmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oPb1A3tLamoKQSsTidwdBrvIVlq9x8pTIpZfrD3Mgto`,
    },
});