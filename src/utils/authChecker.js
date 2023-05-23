import axios from "./axios";
const authChecker = async () => {
    const token = localStorage.getItem("STDNTTKN");
    const STDNTID = localStorage.getItem("STDNTID");
    const FORCOURSE = localStorage.getItem("FORCOURSE");

    if (window.location.pathname !== "/login") {
        if (!token) {
            return window.location.href = '/login';
        } else {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            return await axios.get('/api/student/validate-login')
                .then(({ data }) => {
                    if (data.courseId !== FORCOURSE) {
                        return window.location.href = '/login';
                    }
                    if (data.studentId !== STDNTID) {
                        return window.location.href = '/login';
                    }
                })
                .catch(err => {
                    console.log(err);
                    return window.location.href = '/login';
                });
        }
        return true;
    }
}

export default authChecker;