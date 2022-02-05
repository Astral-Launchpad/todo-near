source neardev/dev-account.env

# near call $CONTRACT_NAME new '{"owner_id": "'$ID'", "total_supply": "1000000000000000", "metadata": { "spec": "ft-1.0.0", "name": "Astral Launchpad Token 4", "symbol": "AL4", "decimals": 8 }}' --accountId $ID

# near view $CONTRACT_NAME ft_metadata --accountId $ID

# near create-account bob.$ID --masterAccount $ID --initialBalance 1

# near call $CONTRACT_NAME storage_deposit '' --accountId bob.$ID --amount 0.00125

# near view $CONTRACT_NAME ft_balance_of '{"account_id": "'bob.$ID'"}'

# near call $CONTRACT_NAME ft_transfer '{"receiver_id": "'bob.$ID'", "amount": "19"}' --accountId $ID --amount 0.000000000000000000000001

# near view $CONTRACT_NAME ft_balance_of '{"account_id": "'supportnear.testnet'"}'

# near call $CONTRACT_NAME storage_deposit '' --accountId supportnear.testnet --amount 0.00125

# near call $CONTRACT_NAME ft_transfer '{"receiver_id": "'supportnear.testnet'", "amount": "100000000"}' --accountId $ID --amount 0.000000000000000000000001

# near view $CONTRACT_NAME ft_balance_of '{"account_id": "'$ID'"}'

