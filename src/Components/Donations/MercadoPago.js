import { Box } from '@chakra-ui/react';
import React from 'react';
import ScriptTag from 'react-script-tag';

const MercadoPago = () => {
<<<<<<< HEAD
	return (
		<>
			<button style={{height:50, width:50}} id="close-image">
				<img alt="" src="https://img.icons8.com/color/50/000000/mercado-pago.png" />
			</button>
		</>
	);
};
=======
    return (
      <Box>
      <button style={{height:50, width:50}} id="close-image">
        <img alt="" src="https://img.icons8.com/color/50/000000/mercado-pago.png" />
        <ScriptTag
          data-preference-id="210986520-b9ded2d8-540a-44a2-b606-207e3b8c7758"
          src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
        />
      </button>
      </Box>
    );
  }
>>>>>>> 88482920b12ff735da58af911ab10eff426b35b5
  
export default MercadoPago;