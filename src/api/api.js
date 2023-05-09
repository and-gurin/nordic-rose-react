import axios from 'axios'

export const nordicAPI = {
    getPosts() {
        return  axios.get(
            `https://dolphin-app-cbjj4.ondigitalocean.app/users/ag_2002/posts`
        )
    },
    getPost(post_id) {
        return  axios.get(
            `https://dolphin-app-cbjj4.ondigitalocean.app/posts/${post_id}`
        )
    },
}
