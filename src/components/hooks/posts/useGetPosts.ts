import {gql, useQuery} from '@apollo/client';
import {Post} from "../../common/interfaces/post";

const GET_POSTS = gql`
query (
    $options: PageQueryOptions
) {
    posts(options: $options) {
        data {
            id
            title
            
        }
        meta {
            totalCount
        }
    }
}
`

// query GetPosts($options:PageQueryOptions!){
//     posts(options:$options){
//         data{
//             id
//             title
//             body
//         }
//     }
// }
export const useGetPosts = (): Post[] | undefined => {
    const {data} = useQuery(GET_POSTS, {
        variables: {$options: {paginate: {page: 1, limit: 10}}}
    });
    console.log(data)
    return data?.posts?.data
}