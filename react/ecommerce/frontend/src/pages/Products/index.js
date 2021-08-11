import React from 'react'
import Card from '../../components/Card'
import {Box, Button, Flex, Grid} from '@chakra-ui/react'
import {useInfiniteQuery} from 'react-query'
import {fetchProductList} from '../../api'

const Products = () => {

    const {status,
        data,
        error,
        isFetching,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage} = useInfiniteQuery('repoData', fetchProductList,{
        getNextPageParam:(lastGroup,allGroups) => {

            const morePageExists = lastGroup?.length===12;
            if (!morePageExists) {
                return;
            }
            return allGroups.length + 1
        }
    })

    if (status==="loading") return 'Loading...'

    if (status==="error") return 'An error has occurred: ' + error.message

    return (
        <>
            <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                {
                    data.pages.map((group,index) => (
                        <React.Fragment key={index}>
                            {
                                group.map((item,key) => (
                                    <Box w="100%" key={item._id}>
                                        <Card item={item} />
                                    </Box>
                                ))
                            }
                        </React.Fragment>
                    ))
                }
            </Grid>
            <Flex justifyContent="center" mt="10">
                <div>
                    <Button
                        variant="outline"
                        isLoading={isFetching}
                        onClick={() => fetchNextPage()}
                        disabled={!hasNextPage || isFetchingNextPage}
                    >
                        {isFetchingNextPage
                            ? 'Loading more...'
                            : hasNextPage
                                ? 'Load Newer'
                                : 'Nothing more to load'}
                    </Button>
                </div>
                <div>
                    {isFetching && !isFetchingNextPage
                        ? 'Background Updating...'
                        : null}
                </div>
            </Flex>
        </>
    );
};

export default Products;