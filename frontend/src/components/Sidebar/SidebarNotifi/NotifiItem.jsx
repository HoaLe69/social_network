import { Avatar , Button } from "@mui/material"

const NotifiItem = () => {
	return <div className="rounded-[10px] transition-all duration-500 px-[24px] gap-[5px] cursor-pointer hover:bg-overlay flex items-center py-[8px]">
		<Avatar src="https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g" sx={{width : 44 , height : 44}}/>	
		<p>Hòa đã bắt đầu theo dõi bạn</p>
		<div className="ml-[auto]">
			<Button variant="contained" sx={{ backgroundColor :'#0095F6' , color : '#fff' , textTransform : 'capitalize' , borderRadius : '10px'  }}>Follow</Button>
		</div>
		</div>
}

export default NotifiItem
