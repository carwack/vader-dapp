/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { ethers } from 'ethers'
import { useWallet } from 'use-wallet'
import { Link, useParams } from 'react-router-dom'
import { Box, Button, Flex, Text, InputGroup, Input, InputRightAddon, Image, Spinner,
	useToast, Container, Tag, TagLabel, Badge, Tabs, TabList, Tab, Switch } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { tokenValueTooSmall } from '../messages'
import { prettifyCurrency } from '../common/utils'
import defaults from '../common/defaults'

const Bond = (props) => {

	const wallet = useWallet()
	const { address } = useParams()
	const toast = useToast()
	const [bond, setBond] = useState([])
	const [token0, setToken0] = useState(defaults.ether)
	const [token0Approved, setToken0Approved] = useState(false)
	const [token0amount, setToken0amount] = useState(0)
	const [token0balance, setToken0balance] = useState(0)
	const [inputAmount, setInputAmount] = useState('')
	const [value, setValue] = useState(0)
	const [slippageTolAmount, setSlippageTolAmount] = useState()
	const [slippageTol, setSlippageTol] = useState(2)
	const [working, setWorking] = useState(false)

	useEffect(() => {
		setBond(defaults.bonds?.filter((b) => {
			return b.address === address
		}))
	}, [address])

	return (
		<>
			<Box
				minHeight={`calc(90vh - ${defaults.layout.header.minHeight})`}
				maxWidth={defaults.layout.container.md.width}
				m='0 auto'
				p={{ base: '5rem 1.1rem 0', md: '5rem 0 0' }}
				{...props}
			>
		 <Flex
		 			minH='96.3667px'
					m='0 auto'
					p='1.8rem'
					flexDir='row'
					height='auto'
					justifyContent='space-between'
				>
					<Link
						to='/bond'
					>
						<Button
							variant='ghost'
							minW='auto'
							width='32px'
							height='32px'
							p='0'
						>
							<ArrowBackIcon
								width='26px'
								height='26px'
							/>
						</Button>
					</Link>
					<Text
						as='h4'
						fontSize='1.24rem'
						fontWeight='bolder'>
						{bond[0]?.token0?.symbol && bond[0]?.token1?.symbol &&
							<>
								{`${bond[0].token0.symbol}-${bond[0].token1.symbol} ${bond[0].name} ${bond[0].liquidityPosition ? 'LP' : '' }`}
							</>
						}
					</Text>
					<Box
						as='button'
						width='22px'
					>
						{/* empty :-) */}
					</Box>
				</Flex>
				<Flex
					m='0 auto'
					flexDir='column'
					layerStyle='colorful'
					height='auto'
					minH='526.4px'
				>
					<Flex
						height='100%'
						flexWrap={{ base: 'wrap', md: 'nowrap' }}
					>
						<Flex
							flexDir='column'
							height='100%'
							width={{ base: '100%', md: '50%' }}
						>
							<Flex
								p={{ base: '1.8rem', md: '1.8rem 0.9rem 1.8rem 1.8rem' }}
								minH='526.4px'
								justifyContent='space-between'
								gridGap='5px'
								flexDir='column'>
								<Tabs
									width='100%'
									isFitted colorScheme='bluish'>
									<TabList mb='1rem'>
										<Tab
											p='0 0 1.5rem 0'
											_active={{
												background: 'transparent',
											}}
											_focus={{
												boxShadow: 'none',
											}}>
											<Text as='h3' m='0' fontSize='1.24rem'>
											Bond
											</Text>
										</Tab>
										<Tab
											p='0 0 1.5rem 0'
											_active={{
												background: 'transparent',
											}}
											_focus={{
												boxShadow: 'none',
											}}>
											<Text as='h3' m='0' fontSize='1.24rem'>
											Claim
											</Text>
										</Tab>
									</TabList>
								</Tabs>

								<Flex
									flexDir='column'
								>
									<Flex
										alignItems='center'
										justifyContent='space-between'>
										<Text
											as='h4'
											fontSize={{ base: '1rem', md: '1.24rem' }}
											fontWeight='bolder'>
										Amount
										</Text>
									</Flex>
									<Flex
										layerStyle='inputLike'
									>
										<InputGroup>
											<Input
												variant='transparent'
												flex='1'
												fontSize='1.3rem'
												fontWeight='bold'
												placeholder='0.0'
												value={inputAmount}
												onChange={(e) => {
													if (isNaN(e.target.value)) {
														setInputAmount(prev => prev)
													}
													else {
														setInputAmount(String(e.target.value))
														if(Number(e.target.value) > 0) {
															try {
																setValue(ethers.utils.parseUnits(String(e.target.value), token0.decimals))
															}
															catch(err) {
																if (err.code === 'NUMERIC_FAULT') {
																	toast(tokenValueTooSmall)
																}
															}
														}
													}
												}}/>
											<InputRightAddon
												width='auto'
												borderTopLeftRadius='0.375rem'
												borderBottomLeftRadius='0.375rem'
												paddingInlineStart='0.5rem'
												paddingInlineEnd='0.5rem'
											>
												<Flex
													cursor='default'
													zIndex='1'
												>
													<Box d='flex' alignItems='center'>
														<Image
															width='24px'
															height='24px'
															borderRadius='50%'
															mr='10px'
															src={token0.logoURI}
														/>
														<Box
															as='h3'
															m='0'
															fontSize='1.02rem'
															fontWeight='bold'
															textTransform='capitalize'>{token0.symbol}</Box>
													</Box>
												</Flex>
											</InputRightAddon>
										</InputGroup>
									</Flex>
									<Flex
										mt='.6rem'
										justifyContent='flex-end'
										flexDir='row'
									>
										<Button
											variant='outline'
											size='sm'
											mr='0.4rem'
											onClick={() => {
												setInputAmount(
													ethers.utils.formatUnits(
														balance.div(100).mul(25),
														token0.decimals),
												)
												setValue(balance.div(100).mul(25))
											}}>
										25%
										</Button>
										<Button
											variant='outline'
											size='sm'
											mr='0.4rem'
											onClick={() => {
												setInputAmount(
													ethers.utils.formatUnits(
														balance.div(100).mul(50),
														token0.decimals),
												)
												setValue(balance.div(100).mul(50))
											}}>
										50%
										</Button>
										<Button
											variant='outline'
											size='sm'
											mr='0.4rem'
											onClick={() => {
												setInputAmount(
													ethers.utils.formatUnits(
														balance.div(100).mul(75),
														token0.decimals),
												)
												setValue(balance.div(100).mul(75))
											}}>
										75%
										</Button>
										<Button
											variant='outline'
											size='sm'
											mr='0.4rem'
											onClick={() => {
												setInputAmount(
													ethers.utils.formatUnits(balance, token0.decimals),
												)
												setValue(balance)
											}}>
										MAX
										</Button>
									</Flex>
								</Flex>

								<Flex
									flexDir='column'
								>
									<Text
										as='h4'
										fontWeight='bolder'>
										Slippage Tolerance
									</Text>
									<Flex
										mt='.6rem'
										justifyContent='flex-start'
										flexDir='row'
									>
										<Button
											variant='outline'
											size='sm'
											mr='0.4rem'
											style={{
												border: '2px solid #3fa3fa',
											}}
											onClick={() => {
												setSlippageTol(2)
											}}>
										2%
										</Button>
										<Button
											variant='outline'
											size='sm'
											mr='0.4rem'
											onClick={() => {
												setSlippageTol(3)
											}}>
										3%
										</Button>
										<Button
											variant='outline'
											size='sm'
											mr='0.4rem'
											onClick={() => {
												setSlippageTol(5)
											}}>
										5%
										</Button>
										<Input
											size='sm'
											variant='outline'
											placeholder='Custom %'
											value={slippageTolAmount}
											onChange={(e) => {
												if (isNaN(e.target.value)) {
													setSlippageTolAmount(prev => prev)
												}
												else {
													setSlippageTolAmount(String(e.target.value))
													if(Number(e.target.value) > 0) {
														try {
															setSlippageTol(Number(e.target.value))
														}
														catch(err) {
															if (err.code === 'NUMERIC_FAULT') {
																console.log('value too small')
															}
														}
													}
												}
											}}
										/>
									</Flex>
								</Flex>

								<Flex
									borderTop='1px solid rgb(102, 101, 129)'
									pt='2.1rem'
									w='100%'
									flexDir='row'
									justifyContent='space-between'
								>
									<Box
										as='h4'
										fontWeight='bolder'
									>
										Use LP tokens instead
									</Box>
									<Switch size='lg'/>
								</Flex>
							</Flex>
						</Flex>

						<Flex
							flexDir='column'
							height='100%'
							width={{ base: '100%', md: '50%' }}
						>
							<Flex
								p={{ base: '1.8rem', md: '1.8rem 1.8rem 1.8rem 0.9rem' }}
								minH='526.4px'
								justifyContent='space-between'
								gridGap='12px'
								flexDir='column'>

								<PriceOverview price={bond?.[0]?.price}/>

								<Breakdown/>

								<Flex
									m='1.66rem 0'
									fontSize={{ base: '1.35rem', md: '1.5rem' }}
									fontWeight='bolder'
									justifyContent='center' alignItems='center' flexDir='column'
								>
									{prettifyCurrency(
										858588,
										0,
										5,
										'VADER',
									)}
									<Box
										as='h3'
										fontWeight='bold'
										textAlign='center'
										fontSize='1rem'
									>
										<Badge
											as='div'
											fontSize={{ base: '0.6rem', md: '0.75rem' }}
											background='rgb(214, 188, 250)'
											color='rgb(128, 41, 251)'
										>Claimable Now
										</Badge>
									</Box>
								</Flex>

								<Flex justifyContent='center'>
									<Button
										size='lg'
										w='100%'
										variant='solidRounded'
										disabled={working}
										onClick={() => console.log('hit')}
									>
										<Text fontWeight="bold">
											{wallet.account &&
												<>
													{!working &&
														<>
															{token0 && !token0Approved &&
																<>
																	Approve {token0.symbol}
																</>
															}
															{token0 && token0Approved &&
																<>
																	Bond
																</>
															}
														</>
													}
													{working &&
														<>
															<Spinner />
														</>
													}
												</>
											}
											{!wallet.account &&
												<>
													Bond
												</>
											}
										</Text>
									</Button>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Box>
		</>
	)
}

const PriceOverview = (props) => {

	PriceOverview.propTypes = {
		price: PropTypes.any.isRequired,
	}

	return (
		<Flex>
			<Container p='0 6px 6px 2px'>
				<Box textAlign={{ base: 'center', md: 'left' }}>
					<Tag
						width='100%'
						flexDir='column'
						size='lg'
						variant='outline'
						p='18px 0'
					>
						<Box fontSize='1rem'>Bond Price</Box>
						<TagLabel fontSize='2.1rem'>{prettifyCurrency(props.price, 0, 4)}</TagLabel>
					</Tag>
				</Box>
			</Container>

			<Container p='0 2px 6px 6px'>
				<Box textAlign={{ base: 'center', md: 'left' }}>
					<Tag
						width='100%'
						flexDir='column'
						size='lg'
						variant='outline'
						p='18px 0'
					>
						<Box fontSize='1rem'>Market Price</Box>
						<TagLabel fontSize='2.1rem'>{prettifyCurrency(props.price, 0, 4)}</TagLabel>
					</Tag>
				</Box>
			</Container>
		</Flex>
	)
}

const Overview = () => {

	return (
		<>
			<Flex
				flexDir='column'
				p='0 0.15rem'
				marginBottom='.7rem'
				opacity='0.87'
			>
				<Flex>
					<Container p='0'>
						<Box
							textAlign='left'
						>
							Total rewards
						</Box>
					</Container>
					<Container p='0'>
						<Box
							textAlign='right'
						>
							999999
						</Box>
					</Container>
				</Flex>

				<Flex>
					<Container p='0'>
						<Box
							textAlign='left'
						>
							Claimed
						</Box>
					</Container>
					<Container p='0'>
						<Box
							textAlign='right'
						>
							222
						</Box>
					</Container>
				</Flex>

				<Flex>
					<Container p='0'>
						<Box
							textAlign='left'>
							Remains vested
						</Box>
					</Container>
					<Container p='0'>
						<Box
							textAlign='right'>
							222
						</Box>
					</Container>
				</Flex>

				<Flex>
					<Container p='0'>
						<Box
							textAlign='left'>
							Vesting Term
						</Box>
					</Container>
					<Container p='0'>
						<Box
							textAlign='right'>
							4
						</Box>
					</Container>
				</Flex>
			</Flex>
		</>
	)
}

const Breakdown = () => {

	return (
		<>
			<Flex
				flexDir='column'
				p='0 0.15rem'
				marginBottom='.7rem'
				opacity='0.87'
			>
				<Text
					as='h4'
					fontSize='1.24rem'
					fontWeight='bolder'>
					Breakdown
				</Text>
				<Flex>
					<Container p='0'>
						<Box
							textAlign='left'
						>
							What you get
						</Box>
					</Container>
					<Container p='0'>
						<Box
							textAlign='right'
						>
							999999
						</Box>
					</Container>
				</Flex>

				<Flex>
					<Container p='0'>
						<Box
							textAlign='left'
						>
							ROI
						</Box>
					</Container>
					<Container p='0'>
						<Box
							textAlign='right'
						>
							222
						</Box>
					</Container>
				</Flex>

				<Flex>
					<Container p='0'>
						<Box
							textAlign='left'>
							Vesting Term
						</Box>
					</Container>
					<Container p='0'>
						<Box
							textAlign='right'>
							3
						</Box>
					</Container>
				</Flex>
			</Flex>
		</>
	)
}

export default Bond