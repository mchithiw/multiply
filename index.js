$(function() {

	$(".x-min").focus(function() {

		$(".x-min").css("border", "1px solid silver");
		$(".x-max").css("border", "1px solid silver");
	});

	$(".x-max").focus(function() {

		$(".x-min").css("border", "1px solid silver");
		$(".x-max").css("border", "1px solid silver");
	});

	$(".y-min").focus(function() {

		$(".y-min").css("border", "1px solid silver");
		$(".y-max").css("border", "1px solid silver");
	});

	$(".y-max").focus(function() {

		$(".y-min").css("border", "1px solid silver");
		$(".y-max").css("border", "1px solid silver");
	});


	function setTable()
	{
		var thCounter = 0;

		$(".mult-table thead th").each(function() {

			if (thCounter > 0)
			{
				var thVal = $(this).html().trim();

				thVal = Number(thVal);

				var t = thVal - 1;

				var counter = 1;

				$(".mult-table tbody tr:eq(" + t + ")").each(function() {

					while (counter <= 10)
					{
						var temp = counter * thVal;
						counter++;

						$(this).append("<td> " + temp + "</td>");
					}

					
				});

			}
		
			thCounter++;
		});
	}

	//initially set table
	setTable();

	$(".submit").click(function() {

		var xmin = $(".x-min").val();
		var xmax = $(".x-max").val();
		var ymin = $(".y-min").val();
		var ymax = $(".y-max").val();

		xmin = xmin.replace(/[^.0-9]/g,'');
		xmax = xmax.replace(/[^.0-9]/g,'');
		ymin = ymin.replace(/[^.0-9]/g,'');
		ymax = ymax.replace(/[^.0-9]/g,'');


		if (xmin !== "")
		{
			xmin = Number(xmin.trim());
			xmin = Math.round(xmin);
			$(".x-min").val(xmin);
		}
		if (xmax !== "")
		{
			xmax = Number(xmax.trim());
			xmax = Math.round(xmax);
			$(".x-max").val(xmax);
		}
		if (ymin !== "")
		{
			ymin = Number(ymin.trim());
			ymin = Math.round(ymin);
			$(".y-min").val(ymin);
		}
		if (ymax !== "")
		{
			ymax = Number(ymax.trim());
			ymax = Math.round(ymax);
			$(".y-max").val(ymax);
		}

		if (xmin === "")
			$(".x-min").css("border", "1px solid red");
		if (xmax === "")
			$(".x-max").css("border", "1px solid red");
		if (ymin === "")
			$(".y-min").css("border", "1px solid red");
		if (ymax === "")
			$(".y-max").css("border", "1px solid red");

		console.log(xmin, xmax, ymin, ymax);

		if (xmin > xmax)
		{
			$(".x-min").css("border", "1px solid red");
			$(".x-max").css("border", "1px solid red");
		}

		if (ymin > ymax)
		{
			$(".y-min").css("border", "1px solid red");
			$(".y-max").css("border", "1px solid red");
		}

		if (xmin > xmax || ymin > ymax)
		{
			return;
		}
		
		if (xmin < 1 || xmin > 10)
		{
			$(".x-min").css("border", "1px solid red");
		}
		if (xmax > 10 || xmax < 1)
		{
			$(".x-max").css("border", "1px solid red");
		}
		if (ymin < 1 || ymin > 10)
		{
			$(".y-min").css("border", "1px solid red");
		}
		if (ymax > 10 || ymax < 1)
		{
			$(".y-max").css("border", "1px solid red");
		}

		if (xmin < 1 || xmax > 10 || ymin < 1 || ymax > 10)
			return;

		if (xmin !== "" && xmax !== "" && ymin !== "" && ymax !== "")
		{
			ymin = ymin+1;
			ymax = ymax+1;
			makeTable(xmin, xmax, ymin, ymax);
		}



	});

	function makeTable(xmin, xmax, ymin, ymax)
	{
		$(".mult-table tr td").show();
			$(".mult-table tr th").show();

			$(".mult-table tbody tr").hide();

			while (xmin <= xmax)
			{
				var t = xmin - 1;
				$(".mult-table tbody tr:eq(" + t + ")").each(function() {
					$(this).show();
				});

				xmin++;
			}

			//nth 2 - 11 

			var ct = 2;

			while (ct <= 11)
			{
				if (ct < ymin || ct > ymax)
				{
					$(".mult-table td:nth-child(" + ct + ")").each(function() {
						$(this).hide();
					});

					$(".mult-table th:nth-child(" + ct + ")").each(function() {
						$(this).hide();
					});
				}

				ct++;
			}
	}

	$(".clear").click(function() {

		$("input").val("");
		$("input").css("border", "1px solid silver");
		makeTable(1, 10, 1, 11);

	});


});