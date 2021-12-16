import json
from asyncio import sleep
from test import *
from channels.generic.websocket import AsyncWebsocketConsumer
from datetime import datetime
from graph.test import price_value


#Consumer function for structuring the code as a series of functions to be called whenever an even happens
#Using channels Asynchronously to be able to do multiple operations

class GraphConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        while True:
            test_var = price_value('Bitcoin-BTC')
            test_var_2 = price_value('Ethereum-ETH')
            test_var_3 = price_value('BinanceCoin-BNB')
            test_var_4 = price_value('Solana-SOL')
            date_var = datetime.now()
            date_var = date_var.strftime("%m/%d/%Y, %H:%M:%S")
            await self.send(json.dumps({'value': test_var,
                                        'value_2': test_var_2,
                                        'value_3': test_var_3,
                                        'value_4': test_var_4,
                                        'date_value':date_var}))
            await sleep(3)
