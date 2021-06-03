import {getAllPostsIds, getPostData} from '../../lib/posts'

export default function Post({postData}){
    return (
        <>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br />
        <div dangerouslySetInnerHTML={{__html:postData.contentHtml}}></div>
        </>
    )
}

export async function getStaticPaths(){
    //return a list of possible value for id
    const paths = getAllPostsIds()
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({params}){
    //fetching data using params.id
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}