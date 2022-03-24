import { PagenationContainer, ResultContainer } from "./resultStyle";
import { useNavigate, useSearchParams } from "react-router-dom";
import { dataFetch } from "../../store/asyncActions/dataForks";
import { DataView } from "../../components/dataView/dataView";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataState, urlParams } from "../../type/type";
import { Button } from "../../style/mixin";



export const ResultPage = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [load, setLoad] = useState(true);
    const [searchParams] = useSearchParams();
    const owner = searchParams.get("owner");
    const page = Number(searchParams.get("page"));
    const repository = searchParams.get("repository");
    const data = useSelector((state:DataState) => state);

    const nextPage = () => {
        if(page && owner && repository)
            PageSwiting(page + 1);
    }

    const prevPage = () => {
        if(page && owner && repository && page > 1)
            PageSwiting(page - 1);
    }

    const PageSwiting = (PageConvert:number) => {

        const page = PageConvert.toString();
        if(page && owner && repository){
            NavigateGenerator({owner, repository, PageConvert: page});
            dispatch(dataFetch({owner, repository, PageConvert: page}));
        }
    }

    const NavigateGenerator = (url: urlParams) => {
        navigate(`/result?page=${url.PageConvert}&owner=${url.owner}&repository=${url.repository}`);
    }

    const Pagenation = useCallback(() => {

        return  <PagenationContainer>
                    <Button
                        onClick={prevPage}
                        props={{color: "black", width: 60, height: 40, background: "#f8f8f8", border: "#d3d3d3"}}
                    >{"<"}</Button>
                    <Button
                        onClick={nextPage}
                        props={{color: "black", width: 60, height: 40, background: "#f8f8f8", border: "#d3d3d3"}}
                    >{">"}</Button>
                </PagenationContainer>

    },[]);

    const FirstLoadData = () => {

        setLoad(false);
        if(page && owner && repository){
            dispatch(dataFetch({owner, repository, PageConvert: `${page}`}));
        }

    }

    useEffect(() => {

        if(load)
            FirstLoadData();

    },[data, searchParams]);

    return  <ResultContainer>

                {page > 0 ? <DataView/> : <>takou</>}
                {page > 0 && <Pagenation/>}
            </ResultContainer>

}