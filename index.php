<?php session_start(); ?>
<html>
	<head>
	<title>tester</title>
	</head>
	<body>
	<?php
		echo "array: [1,3,5,7,9]";
		echo "<br/>";
		$numbers = array(1,3,5,7,9);
		$min_value = min($numbers);
		$max_value = max($numbers);
		echo 'min is: '.$min_value.'';
		echo "<br/>";
		echo 'max is: '.$max_value.'';
		echo "<br/>";
		asort($numbers, SORT_NUMERIC);
		echo "minimum sum: ";
		print_r(array_sum(array_slice($numbers, 0, 4, true)));
		echo " | " ;
		echo "maximum sum: ";
		rsort($numbers, SORT_NUMERIC);
		print_r(array_sum(array_slice($numbers, 0, 4, true)));
		echo "<br/>";
		if (isset($_POST['submit'])) {
			if(!array_key_exists("numbers", $_SESSION)) {
				$_SESSION["numbers"] = array();
			}
			if (is_numeric($_POST["numberinput"])) {
				array_push($_SESSION["numbers"], $_POST["numberinput"]);
			}
		}

		if(isset($_POST['clear'])) {
			$_SESSION["numbers"] = array();
		}

		if(array_key_exists("numbers", $_SESSION)) {
			echo implode("+", $_SESSION["numbers"]);
			miniMaxSum($_SESSION["numbers"]);
		}

		function miniMaxSum($arr){
			echo "<br/>";
			echo 'array adding... ';
			print_r($arr);
			if(count($arr) === 5){
				echo "<br/>";
				asort($arr, SORT_NUMERIC);
				print_r(array_sum(array_slice($arr, 0, 4, true)));
				echo " | " ;
				rsort($arr, SORT_NUMERIC);
				print_r(array_sum(array_slice($arr, 0, 4, true)));
				echo "<br/>";
					
			}else if(count($arr) === 4){
				if (!in_array(1, $arr)) {
						echo "<br/>";
						echo "except 1: total is ";
						//$pos = array_search(1, $arr);
						//unset($arr[$pos]);
						echo array_sum($arr);
					}else if (!in_array(2, $arr)) {
						echo "<br/>";
						echo "except 2: total is ";
						//$pos = array_search(1, $arr);
						//unset($arr[$pos]);
						echo array_sum($arr);
					}else if (!in_array(3, $arr)) {
						echo "<br/>";
						echo "except 3: total is ";
						//$pos = array_search(1, $arr);
						//unset($arr[$pos]);
						echo array_sum($arr);
					}else if (!in_array(4, $arr)) {
						echo "<br/>";
						echo "except 4: total is ";
						//$pos = array_search(1, $arr);
						//unset($arr[$pos]);
						echo array_sum($arr);
					}else{
						echo "<br/>";
						echo "except 5: total is ";
						//$pos = array_search(1, $arr);
						//unset($arr[$pos]);
						echo array_sum($arr);
					}
			}else{
				
			}
		}
?>
		<form method="post">
			<input name="numberinput" type="number" id="numberinput" placeholder="please input an integer"/>
			<button type="submit" id="submit" name="submit">push</button> <button type="submit" name="clear">clear</button>
		</form>
	</body>
</html>