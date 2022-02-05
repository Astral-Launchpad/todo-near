source neardev/dev-account.env

# near create-account private_sale.$ID --masterAccount $ID --initialBalance 1

# near call $ID storage_deposit '' --accountId private_sale.$ID --amount 0.00125

# near view $ID ft_balance_of '{"account_id": "'private_sale.$ID'"}'

# near call $ID ft_transfer '{"receiver_id": "'private_sale.$ID'", "amount": "5000000000000"}' --accountId $ID --amount 0.000000000000000000000001

# near call $ID ft_transfer '{"receiver_id": "'$ID'", "amount": "5000000000000"}' --accountId private_sale.$ID --amount 0.000000000000000000000001
