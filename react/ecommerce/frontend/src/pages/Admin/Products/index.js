import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteProduct, fetchProductList } from '../../../api';
import { Popconfirm, Table } from 'antd';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { Button, Heading } from '@chakra-ui/react';

const Products = () => {

	const queryClient = useQueryClient();

	const {isLoading, isError, error, data} = useQuery(['admin:products'],
		fetchProductList);

	const deleteMutation = useMutation(deleteProduct, {
		onSuccess:async () => {
			await queryClient.invalidateQueries('admin:products');
			await queryClient.invalidateQueries('repoData');
		},
	});

	const columns = useMemo(() => {
		return [
			{
				title: 'Title',
				dataIndex: 'title',
				key: 'title',
			},
			{
				title: 'Price',
				dataIndex: 'price',
				key: 'price',
			},
			{
				title: 'CreatedAt',
				dataIndex: 'createdAt',
				key: 'createdAt',
			},
			{
				title: 'Action',
				key: 'action',
				render: (text, record) => (
					<>
						<Link to={`/admin/products/${record._id}`}>Edit</Link>
						<Popconfirm title="Are you sure?"
						            onConfirm={() => {
							            deleteMutation.mutate(record._id);
						            }}
						            onCancel={() => {

						            }}
						            okText="Yes"
						            cancelText="No"
						            placement="left"
						><a style={{marginLeft: 10}} href="/#">Delete</a></Popconfirm>
					</>
				),
			},
		];
	}, [deleteMutation]);

	if (isLoading) {
		return <div>Loading</div>;
	}
	if (isError) {
		return <div>error {error}</div>;
	}

	return (
		<>
			<Heading mb="4" textAlign="center">Products</Heading>
			<Link to={{pathname: 'products/new'}}><Button mb="2" float="right"> Add
				Product</Button></Link>

			<Table columns={columns} dataSource={data} rowKey="_id"/>
		</>
	);
};

export default Products;