import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useWallet } from 'use-wallet'
import { ethers } from 'ethers'
import { Box, Flex, Text,
	useToast, InputGroup, Input, InputRightAddon, Image, Button, Spinner } from '@chakra-ui/react'
import { BondItem } from '../components/BondItem'
import { tokenValueTooSmall } from '../messages'
import defaults from '../common/defaults'

const Bonds = (props) => {

	return (
		<Box
			minHeight={`calc(90vh - ${defaults.layout.header.minHeight})`}
			maxWidth={defaults.layout.container.md.width}
			m='0 auto'
			p={{ base: '5rem 1.1rem 0', md: '5rem 0 0' }}
			{...props}
		>
			<Flex
				m='0 auto'
				p='1.8rem'
				flexDir='row'
				height='auto'
				justifyContent='space-between'
			>
				<Text
					as='h4'
					fontSize='1.24rem'
					fontWeight='bolder'>
						Bonds
				</Text>
			</Flex>
			<Flex
				m='0 auto'
				p='1px'
				flexDir='column'
				height='auto'
				mb='98.4px'
				layerStyle='colorful'
				backgroundImage='linear-gradient(90deg,rgb(100, 71, 101) 0%,rgb(33, 74, 112) 100%)'
			>
				<Flex
					width='100%'
					layerStyle='colorful'
					background='#000000c4;'
					minH='430.4px'
					p='1.5rem 0 4.5rem'
					flexDir='column'
					justifyContent='center'
					position='relative'
				>
					<Box
						p='0 20px'
						display='block'
						flexDir='column'
						justifyContent='center'
						textAlign='center'
						alignItems='center'
						minH='430.4px'
					>
						<Flex
							width='100%'
							alignItems='center'
							justifyContent='space-between'
							p='0 12px'
							minH='34.4px'
							mb='1rem'
						>
							<>
								<Flex>
									<Text
										as='h4'
										fontSize='1.1rem'
										fontWeight='bolder'>
											Assets
									</Text>
								</Flex>
								<Flex
									gridGap='38px'
								>
									<Flex>
										<Text
											as='h4'
											fontSize='1.1rem'
											fontWeight='bolder'>
											Price
										</Text>
									</Flex>
									<Flex>
										<Text
											as='h4'
											fontSize='1.1rem'
											fontWeight='bolder'>
											Payout Asset
										</Text>
									</Flex>
									<Flex>
										<Text
											as='h4'
											fontSize='1.1rem'
											fontWeight='bolder'>
											ROI
										</Text>
									</Flex>
									<Flex>
										<Text
											as='h4'
											fontSize='1.1rem'
											fontWeight='bolder'>
											TVB
										</Text>
									</Flex>
								</Flex>
							</>
						</Flex>
						<style>
							{`
								@keyframes bgAnimation {
									0% { background: rgba(244, 155, 202, 0.08); }
									50% { background: #f44ca235; }
									100% { background: rgba(244, 155, 202, 0.08); }
								}
							`}
						</style>
						{defaults.bonds.available?.map((item, index) => {
							return (
								<BondItem
									key={index}
									address={item.address}
									price={item.price}
									payout={item.payout}
									token0={item.token0}
									token1={item.token1}
									hasBought={item.hasBought}/>
							)
						})}
					</Box>
					<Flex
						flexDir='row'
						alignItems='center'
						justifyContent='center'
						minH='40px'
						position='absolute'
						left='50%'
						transform='translateX(-50%)'
						bottom='0'
						marginBottom='1.5rem'
					>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	)
}

export default Bonds
