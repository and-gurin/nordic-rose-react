import axios from 'axios'

export const nordicAPI = {
    getPosts(page, pageSize) {
        return  axios.get(
            `https://dolphin-app-cbjj4.ondigitalocean.app/users/ag_2002/posts?page=${page}&page_size=${pageSize}`
        )
    },
    getPost(post_id) {
        return  axios.get(
            `https://dolphin-app-cbjj4.ondigitalocean.app/posts/${post_id}`
        )
    },
    saveEmail (email) {
        return axios.post(
            `https://dolphin-app-cbjj4.ondigitalocean.app/users/ag_2002/subscribers`,
            email
        )
    }
}
