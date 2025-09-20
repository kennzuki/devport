
type PostFilterProps = {
    searchQuery: string;
    onSearchange: (value:string) => void;
}

const PostFilter = ({ searchQuery, onSearchange }: PostFilterProps) => {

    return ( 
        <div className="mb-6">
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => onSearchange(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
     );
}
 
export default PostFilter;