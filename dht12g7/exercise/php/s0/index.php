<?php
    function is_true ($value) {
        if (!$value): return false;
        elseif (!isset($value)): return false;
        elseif (is_null($value)): return false;
        else: return true;
        endif;
    };
    include 'cat.php';
    include 'dog.php';
    $is_array = array();
    $is_array[] = new Cat (array('name' => 'Fábio', 'breed' => 'Pastor'));
    $is_array[] = new Cat (array('name' => 'Paulo', 'breed' => ''));
    $is_array[] = new Cat (array('name' => 'Matilde', 'breed' => 'Poddle'));
    function get_listbuilder ($array) {
        $value = '';
        for ($i = 0; $i < count($array); $i++):
            $value .= 'The position (';
            $value .= $i;
            $value .= ') is (';
            $value .= trim($array[$i]->name);
            $value .= ')';
            $value .= $i < count($array) - 1 ? ';' : '.';
            $value .= $i < count($array) - 1 ? '<br>' : '';
        endfor;
        return $value;
    }
    echo get_listbuilder($is_array);
    echo '<hr>';
    function get_objectbuilder ($array) {
        $newarray = array();
        for ($i = 0; $i < sizeof($array); $i++):
            if (is_true($array[$i]->name) && is_true($array[$i]->breed)):
                $newarray[] = new Dog (array(
                    'name' => trim($array[$i]->name),
                    'breed' => trim($array[$i]->breed),
                ));
            endif;
        endfor;
        return $newarray;
    }
    var_dump(get_objectbuilder($is_array));
?>