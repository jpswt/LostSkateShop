import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../scss/styles/ItemsModal.css';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const ItemsModal = ({ item }) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button onClick={handleOpen} sx={{ color: 'hsl(168, 99%, 24%)' }}>
				View Items
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				className="modal-body"
			>
				<Box className="box">
					{item?.products?.map((product, index) => {
						return (
							<div key={index}>
								<div className="line-item">Line Item {index + 1}</div>

								<Typography id="modal-modal-title" variant="h6" component="h2">
									{product.description}
								</Typography>
								<Typography id="modal-modal-description" sx={{ mt: 2 }}>
									<span className="quantity">Quantity: {product.quantity}</span>
									<span className="price">
										Price: ${(product.amount_total / 100).toFixed(2)}
									</span>
								</Typography>
							</div>
						);
					})}
					<Typography
						id="modal-modal-shipping"
						variant="h6"
						component="h2"
						sx={{ mt: 2 }}
						className="shipping"
					>
						<div className="ship-item">Costs</div>
						<div className="costs">
							<span className="ship-cost">Shipping Cost: $5.99</span>
							<span className="ship-cost">
								Total Cost:${(item.amount / 100).toFixed(2)}{' '}
							</span>
						</div>
					</Typography>
				</Box>
			</Modal>
		</div>
	);
};

export default ItemsModal;
